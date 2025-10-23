import sys
input = sys.stdin.readline

P = [0,1,1,1,2, 2]

for i in range(1, 100):
    P.append(P[-1] + P[-5])

T = int(input().strip())
for _ in range(T):
    print(P[int(input().strip())])
