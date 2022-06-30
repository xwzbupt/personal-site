# Leetcode Hot 100

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

也就是说，若某格子值为 `1`，则以此为**右下角**的正方形的、最大边长为：上面的正方形、左面的正方形或左上的正方形中，最小的那个，再加上此格。



```java
```

