# 268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

**Example 1:**
```
**Input:** n = 00000010100101000001111010011100
**Output:** 964176192 (00111001011110000010100101000000)
**Explanation:** The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
```

**Example 2:**
```
**Input:** n = 11111111111111111111111111111101
**Output:** 3221225471 (10111111111111111111111111111111)
**Explanation:** The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```

**Constraints:**

- n == The input must be a binary string of length 32

 

**Follow up:** If this function is called many times, how would you optimize it?