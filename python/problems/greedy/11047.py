n, k = map(int, input().split())

coins = []

for i in range(n):
    coins.insert(0, int(input()))


answer = 0

for coin in coins:
    if k == 0:
        break

    answer += k // coin
    k = k % coin

print(answer)
