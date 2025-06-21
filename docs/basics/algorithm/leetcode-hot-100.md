# Leetcode Hot 100

[TOC]

## 139.单词拆分

> 该题最优解应该是方法三：动态规划

给你一个字符串 `s` 和一个字符串列表 `wordDict` 作为字典。请你判断是否可以利用字典中出现的单词拼接出 `s` 。

**注意：**不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

**示例 1：**

```
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
```

**示例 2：**

```
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。
```

**示例 3：**

```
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
```

**提示：**

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` 和 `wordDict[i]` 仅有小写英文字母组成
- `wordDict` 中的所有字符串 **互不相同**

**方法一：DFS**

`visited[i]`用来表示`[0, i - 1]`这一段字符串是否可以被字典中的字符串进行匹配，来减少重复计算。

```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        boolean[] visited = new boolean[s.length() + 1];
        return dfs(s, 0, wordDict, visited);
    }

    private boolean dfs(String s, int start, List<String> wordDict, boolean[] visited) {
        for (String word : wordDict) {
            int nextStart = start + word.length();
            
            //判断visited[nextStart]是否已经匹配，提前判断nextStart是否越界
            if (nextStart > s.length() || visited[nextStart]) {
                continue;
            }
            
            if (s.indexOf(word, start) == start) {
                if (nextStart == s.length() || dfs(s, nextStart, wordDict, visited)) {
                    return true;
                }
                visited[nextStart] = true;
            }
        }
        return false;
    }
}
```

**方法二：BFS**

```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Deque<Integer> queue = new LinkedList<>();
        queue.add(0);

        int length = s.length();
        boolean[] visited = new boolean[length + 1];

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int start = queue.removeFirst();
                for (String word : wordDict) {
                    int nextStart = start + word.length();

                    if (nextStart > length || visited[nextStart]) {
                        continue;
                    }

                    if (s.indexOf(word, start) == start) {
                        if (nextStart == length) {
                            return true;
                        }
                        queue.add(nextStart);
                        visited[nextStart] = true;
                    }
                }
            }
        }
        return false;
    }
}
```

**方法三：动态规划**

`s[0:i]`子串对应`dp[i+1]`，是否为true，取决于：

- 前缀子串`s[0:j-1]`的`dp[j]`是否为true
- 剩余子串`s[j:i]`是否为单词表的单词

初始条件：`dp[0] = true`，

```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> set = new HashSet<>();
        for (String word : wordDict) {
            set.add(word);
        }
        int length = s.length();
        boolean[] dp = new boolean[length + 1];
        dp[0] = true;
        for (int i = 1; i <= length; i++) {
            for (int j = i - 1; j >= 0; j--) {
//                if (dp[i]) {
//                    break;
//                }
//                if(!dp[j]) {
//                    continue;
//                }
                String suffix = s.substring(j, i);  //s[j:i-1]
                if (set.contains(suffix) && dp[j]) {
                    dp[i] = true;
                    break;//已经确定了i这个位置可以被字典匹配，不需要继续拆分了
                }
            }
        }
        return dp[length];
    }
}
```

**优化：**迭代过程中，如果提前发现`dp[i]==true`，直接break；如果`dp[j]==false`，`dp[i]`也没有成为true的可能。优化代码在如上注释部分。

## 169.多数元素

给定一个大小为 `n` 的数组 `nums` ，返回其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**方法：摩尔投票**

```java
class Solution {
    public int majorityElement(int[] nums) {
        int most = nums[0];
        int count = 1;
        for (int i = 1; i < nums.length; i++) {
            if (count == 0) {
                most = nums[i];
            }
            if (nums[i] != most) {
                count--;
            } else {
                count++;
            }
        }
        return most;
    }
}
```

## 221.最大的正方形

在一个由 `'0'` 和 `'1'` 组成的二维矩阵内，找到只包含 `'1'` 的最大正方形，并返回其面积。

**示例 ：**

```
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
```

`dp(i, j)` 是以 `matrix(i - 1, j - 1)` 为 **右下角** 的正方形的最大边长。

$dp[i,j] = min(dp[i-1,j],dp[i,j-1],dp[i-1,j-1])+1$

也就是说，若某格子值为 `1`，则以此为**右下角**的正方形的最大边长为：上面的正方形、左面的正方形或左上的正方形中，最小的那个，再加上此格。

为何不是 `dp[i][j]`，为了代码简洁，我们 **假设补充** 了多一行全 `'0'`、多一列全 `'0'`

```java
class Solution {
    public int maximalSquare(char[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int maxEdge = Integer.MIN_VALUE;
        int dp[][] = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (matrix[i - 1][j - 1] == '1') {
                    int min = Math.min(dp[i - 1][j], dp[i][j - 1]);
                    min = Math.min(min, dp[i - 1][j - 1]);
                    dp[i][j] = min + 1;
                    maxEdge = Math.max(maxEdge, dp[i][j]);
                }
            }
        }
        return maxEdge * maxEdge;
    }
}
```

## 279.完全平方数

给你一个整数 `n` ，返回 *和为 `n` 的完全平方数的最少数量* 。

**完全平方数** 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，`1`、`4`、`9` 和 `16` 都是完全平方数，而 `3` 和 `11` 不是。

**示例 ：**

```
输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
```

动态转移方程为：`dp[i] = MIN(dp[i], dp[i - j * j] + 1)`，`i` 表示当前数字，`j*j` 表示平方数，j从1到$\sqrt{i}$。

```java
class Solution {
    public int numSquares(int n) {
        int[] dp = new int[n + 1];
        for (int i = 1; i <= n ;i++) {
            dp[i] = i;
            for (int j = 1; i - j * j >= 0;j++) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }
        return dp[n];
    }
}
```

## **283.移动零**

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意** ，必须在不复制数组的情况下原地对数组进行操作。

**示例 :**

```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

`left`指向已经处理好的序列的尾部，`right`指向还没有处理好的序列的头部。右指针不断向右移动，每次右指针指向非零数，则将左右指针对应的数交换，同时左指针右移。

注意到以下性质：

1. 左指针左边均为非零数；
2. 右指针左边直到左指针处均为零。

```java
class Solution {
    public void moveZeroes(int[] nums) {
        int n = nums.length;
        int left = 0, right = 0;

        while (right < n) {
            if (nums[right] != 0) {
                swap(nums, left, right);
                left++;
            }
            right++;
        }
    }

    public void swap(int[] nums, int left, int right) {
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }
}
```

## 287.寻找重复数

给定一个包含 `n + 1` 个整数的数组 `nums` ，其数字都在 `[1, n]` 范围内（包括 `1` 和 `n`），可知至少存在一个重复的整数。

假设 `nums` 只有 **一个重复的整数** ，返回 **这个重复的数** 。

你设计的解决方案必须 **不修改** 数组 `nums` 且只用常量级 `O(1)` 的额外空间。

**示例 ：**

```
输入：nums = [1,3,4,2,2]
输出：2
```

**方法一：参考剑指offer的解法，但是该方法修改了原数组**

```java
class Solution {
    public int findDuplicate(int[] nums) {
        int i = 0;
        while (i < nums.length) {
            if (i + 1 == nums[i]) {
                i++;
            } else {
                if (nums[i] != nums[nums[i] - 1]) {
                    swap(nums, i, nums[i] - 1);
                } else {
                    return nums[i];
                }
            }
        }
        return -1;
    }
}
```

**方法二：环形链表、快慢指针**

类似于142题

