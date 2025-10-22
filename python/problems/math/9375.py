import sys
input = sys.stdin.readline

t = int(input().strip())

for _ in range(t):
    category = {}
    n = int(input().strip())
    for _ in range(n):
        name, type = input().split()
        category[type] = category.get(type, 0) + 1
    
    count = 1
    for v in category.values():
        count *= (v + 1)
    
    print(count -1)



    
    
    
