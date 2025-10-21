import sys
input = sys.stdin.readline

n = int(input().strip())
steps = [int(input().strip()) for _ in range(n)]

if n == 1:
    print(steps[0])
elif n == 2:
    print(steps[0] + steps[1])
else:
    dp = [0] * n
    dp[0] = steps[0]
    dp[1] = steps[0] + steps[1]

    for i in range(2, n):
        # 경우 1: i-2에서 2칸 점프
        case1 = dp[i-2] + steps[i]

        # 경우 2: i-3에서 와서 i-2, i-1, i 밟음
        case2 = dp[i-3] + steps[i-1] + steps[i]

        dp[i] = max(case1, case2)

    print(dp[n-1])
