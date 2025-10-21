import sys
input = sys.stdin.readline


n, m = map(int, input().split())

password = {}

for _ in range(n):
    site, pwd = input().split()
    password[site] = pwd

for _ in range(m):
    print(password[input().strip()])


