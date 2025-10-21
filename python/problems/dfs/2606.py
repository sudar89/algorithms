import sys 
input = sys.stdin.readline

n = int(input().strip())
l = int(input().strip())

graph = {i : [] for i in range(1, n+1)}

for _ in range(l):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = set()

def dfs(node):
    visited.add(node)
    
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(neighbor)
            
dfs(1)

print(len(visited)-1)




