import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,d as s}from"./app.c34d8f83.js";const i={},l=s(`<h1 id="高速i-o-下" tabindex="-1"><a class="header-anchor" href="#高速i-o-下" aria-hidden="true">#</a> <strong>高速I/O（下）</strong></h1><blockquote><p><strong>mmap和零拷贝是如何提高I/O读写速度的？</strong></p></blockquote><p>上一节，我们介绍了I/O读写的底层实现原理，不管读还是写，即便存在DMA，都需要进行2次数据的拷贝和1次系统调用，而1次系统调用又会导致2次用户态和内核态的上下文切换。这也是普通I/O读写值得优化的地方，本节，我们就讲一讲如何利用mmap和零拷贝技术，来提高I/O读写速度。</p><h2 id="一、mmap" tabindex="-1"><a class="header-anchor" href="#一、mmap" aria-hidden="true">#</a> <strong>一、mmap</strong></h2><p>mmap（memory-mapped file，内存映射文件）是提高文件读写性能的有效技术。注意，mmap一般用于文件，像网络这种数据未知的I/O设备，不适合使用mmap。</p><p>mmap的实现原理，跟上一节讲到的普通I/O读写的底层实现原理，已经完全不同了，已经不再强调区分内核缓冲区和应用程序缓冲区这两个概念了，取而代之，我们需要对操作系统中的物理内存、虚拟内存、缺页中断有一定了解。这里我们简单介绍一下这三个概念。</p><p>物理内存被操作系统中同时运行的多个进程所共享，你占几块，我占几块，他占几块...每个进程都要记录自己占了哪几块，进程操作这些不连续的内存地址会比较复杂。于是，操作系统便在物理内存之上，抽象出来了虚拟内存的概念。每个进程都有一个独享的虚拟内存，地址从0开始并且是连续的，操作系统负责记录虚拟内存跟物理内存之间的映射关系。这样每个进程只需要操作虚拟内存地址即可，操作系统负责将虚拟内存地址转化成物理地址，然后再访问物理内存。</p><p>除此之外，操作系统在执行程序时，并不是把整个程序都加载到物理内存再执行。毕竟物理内存是有限的，并且操作系统还要同时运行多个程序。操作系统只会在物理内存加载程序的一小段代码。如果CPU在执行代码时，发现待执行的代码没有在物理内存中，就会向操作系统发出一个缺页中断，操作系统会将待执行的代码从磁盘加载到物理内存。如果物理内存中没有空闲空间存储待执行的代码，操作系统会将不再被执行的代码，置换出物理内存，回写到磁盘。利用这种机制，即便物理内存很小，我们也可以运行很大的程序。</p><p>简单了解了物理内存、虚拟内存、缺页中断之后，我们再来看下mmap的底层实现原理。</p><p>上一节提到，虚拟内存空间分为内核空间和用户空间。mmap将文件或者文件中的某段（由应用程序来定，待会有示例），映射到用户空间中的某段虚拟内存地址上。当应用程序读写这段虚拟内存地址对应的虚拟内存空间时，如果对应的文件没有加载到物理内存，就会触发缺页中断，然后操作系统自动将其加载到物理内存中。如果写操作改变了物理内存，在一定时间之后，操作系统会自动将“脏页”回写到磁盘。当然，我们也可以调用msync()系统调用，主动要求操作系统在写操作完成之后，立即将“脏页”回写到磁盘。</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/84359000_1654618233.png" alt="img"></p><p>为了更好的解释mmap的实现原理，我们编写一个Linux系统下mmap的示例代码，如下所示，mmap()函数返回的ptr指针，存储的就是文件映射到虚拟内存之后的首地址。使用mmap技术，我们不需要使用read()、write()函数，直接操作虚拟内存空间（也就是操作ptr），即可实现对文件的读写。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main(void){
    char* file = &quot;/users/root/in.txt&quot;;
    int fd = open(file, O_RDWR, 0666);
    if(fd &lt; 0){
        printf(&quot;open file failed!\\n&quot;);
        return -1;
    }

    // 映射文件开头（offset=0）的512字节（length=512）到ptr
    size_t length = 512;
    int offset = 0;
    char *ptr = mmap(null, length, PROT_READ | PROT_WRITE, MAP_SHARED, fd, offset);
    if (ptr == MAP_FAILED) {
        printf(&quot;mmap failed.&quot;);
        return -1;
    }
    // 创建好内存映射文件之后，fd就没用了，可以释放了
    close(fd);

    // 操作ptr就等同于读写文件
    for (int i = 0; i &lt; length; i++) {
       ptr[i] = &#39;a&#39; + (length%26);
    }
    for (int i = 0; i &lt; N; i++) {
        printf(&quot;%c&quot;,ptr[i]);
    }
    
    // 删除内存映射文件，释放占用的虚拟内存空间
    munmap(ptr, length);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述示例代码是在Linux操作系统下用C语言实现的，实际上，Java NIO类库也提供了相应的函数（FileChannel中的map()函数）来实现mmap，具体的函数定义如下所示。实际上，在Linux操作系统下，map()函数底层也是通过调用了Linux操作系统的mmap()系统调用来实现的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 位于java.nio.FileChannel类中</span>
<span class="token keyword">public</span> <span class="token class-name">MappedByteBuffer</span> <span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">MapMode</span> mode<span class="token punctuation">,</span> <span class="token keyword">long</span> position<span class="token punctuation">,</span> <span class="token keyword">long</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>mmap相当于直接将数据在磁盘和用户空间之间互相拷贝，相对于使用read()、write()系统调用读写文件，数据拷贝次数由2次减少为1次。除此之外，使用mmap读写文件，只需要在开始时，调用一次mmap()系统调用，建立好映射关系，之后读写文件就像读写内存一样，并不需要使用read()、write()系统调用，这也减少系统调用引起的用户态和内核态上下文切换的耗时。</p><p>那么，相比于使用read()、write()读写文件，使用mmap读写文件是不是就一定性能更高呢？显然，这个答案是否定的。不然，为什么还会有那么多项目使用read()、write()来读写文件呢？</p><p>我们可以类比插入排序和快速排序来看。虽然快速排序比插入排序时间复杂度要低，但是快速排序的逻辑更加复杂，对于小数据量的排序，插入排序因为逻辑简单，反而运行的更快。当然，对于大数据量的排序，快速排序便能发挥优势，运行的更快。</p><p>这里的mmap就相当于快速排序，普通的read()、write()就相当于插入排序。mmap能够减少一次数据拷贝，但这并不是免费的。mmap实现原理更加复杂。使用mmap将会带来一些额外的开销，比如建立虚拟内存与文件之间的映射会比较耗时，缺页中断导致上下文切换也会比较耗时。对于少量文件读写，使用read()、write()函数更加合适。尽管使用read()、write()函数需要进行两次数据拷贝，但是拷贝的数据量都很小，并不会太影响读写性能。对于大文件的读写，数据拷贝非常影响读写性能，因此，使用mmap的优势就更加明显。一般来讲，在项目中使用mmap之前，我们需要做一些测试来验证，其是否能真正提高读写性能。</p><p>除此之外，mmap还有一个特殊的应用场景，那就是用于进程间通信。当两个应用程序都采用MAP_SHARED模式创建匿名的内存映射文件时，如下示例代码所示，这两个应用程序会共享物理内存，一个应用程序可以读取另一个程序写入物理内存的数据，以此来实现互相通信。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>char* ptr = mmap(NULL, length, PROT_READ | PROT_WRITE,
                  MAP_SHARED | MAP_ANONYMOUS, -1, 0); //fd=-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、零拷贝" tabindex="-1"><a class="header-anchor" href="#二、零拷贝" aria-hidden="true">#</a> <strong>二、零拷贝</strong></h2><p>mmap和零拷贝都可提高I/O的读写速度，只不过，它们作用的场景不同。mmap主要用于文件的读写这一应用场景，而零拷贝（Zero-copy）技术主要用于两个I/O设备之间互相传输数据，特别是在将文件中的数据发送到网络或者将从网络接收的数据存储到文件这一场景中，经常会用到零拷贝技术。</p><p>按照上一节讲到的普通的I/O读写流程，如果我们将文件中的一块数据读出，并通过网络发送出去，如下代码所示，需要先调用read()系统调用，再调用write()系统调用，那么总共需要执行4次数据拷贝、4次用户态和内核态之间的上下文切换（由2次系统调用引起的）。零拷贝技术的目的就是减少数据拷贝和上下文切换。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>read(fd, buffer,len);
write(socketfd, buffer,len);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对比普通I/O的工作流程，零拷贝的工作流程如下所示。</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/58755700_1654618234.png" alt="img"></p><p>从上图我们可以发现，零拷贝并不是完全没有拷贝，而是减少了不必要的拷贝次数。使用零拷贝技术，我们不需要将数据从内核读缓冲区拷贝到应用程序缓冲区，而是直接从内核读缓冲区拷贝到内核写缓冲区。这样就节省了1次数据拷贝。除此之外，为了实现将文件发送到网络，普通的I/O流程需要进行2次系统调用（先执行read()，再执行write()），而使用零拷贝技术，应用程序只需要进行一次系统调用（执行sendfile()），系统调用减少了一次，用户态和内核态的上下文切换减少了2次，性能也就得到了提高。</p><p>Linux操作系统提供了sendfile()系统调来实现零拷贝技术。除了文件到网络的数据传输，对于两个文件之间的数据传输，我们也可以使用零拷贝技术。示例代码如下所示。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;unistd.h&gt;
#include &lt;fcntl.h&gt;
#include &lt;sys/sendfile.h&gt;
#include &lt;sys/stat.h&gt;
#include &lt;sys/types.h&gt;
int main (int argc, char* argv[]) {
  int read_fd;
  int write_fd;
  struct stat stat_buf;
  off_t offset = 0;
  read_fd = open (argv[1], O_RDONLY); 
  fstat (read_fd, &amp;stat_buf);
  write_fd = open (argv[2], O_WRONLY | O_CREAT, stat_buf.st_mode);     
  sendfile (write_fd, read_fd, &amp;offset, stat_buf.st_size);
  close (read_fd);
  close (write_fd);
  return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同的操作系统提供了不同的系统调用来实现零拷贝技术，Java作为跨平台语言，封装了不同操作系统的的系统调用的区别，提供了统一函数来实现了零拷贝技术。在Java中实现零拷贝可以使用FileChannel类的transferTo()函数和transferFrom()函数。两个函数的定义如下所示。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 位于java.nio.FileChannel类中</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">long</span> transferTo <span class="token punctuation">(</span><span class="token keyword">long</span> position<span class="token punctuation">,</span> <span class="token keyword">long</span> count<span class="token punctuation">,</span> <span class="token class-name">WritableByteChannel</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">long</span> transferFrom <span class="token punctuation">(</span><span class="token class-name">ReadableByteChannel</span> src<span class="token punctuation">,</span> <span class="token keyword">long</span> position<span class="token punctuation">,</span> <span class="token keyword">long</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述零拷贝的实现原理图，我们可以发现，内核读缓冲区到内核写缓冲区的数据拷贝也是没有必要的。有一种特殊的DMAC协处理器：SG-DMAC（Scatter-Gatter DMA Controller）可以解决这个问题。不过这需要特殊硬件的支持。在使用SG-DAMC之后，零拷贝的工作流程变成了如下所示，又减少了1次数据拷贝。</p><p><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/18949500_1654618235.png" alt="img"></p><h2 id="三、课后思考题" tabindex="-1"><a class="header-anchor" href="#三、课后思考题" aria-hidden="true">#</a> <strong>三、课后思考题</strong></h2><p>本节讲到mmap技术主要用于文件读写，那么，为什么网络读写不能使用mmap技术？</p>`,36),d=[l];function t(r,p){return a(),e("div",null,d)}const m=n(i,[["render",t],["__file","22.高速io.html.vue"]]);export{m as default};
