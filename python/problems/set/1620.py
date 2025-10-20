n, m = map(int, input().split())

pokemon = {}
nums = {}

for i in range(1, n + 1):
    name = input()
    pokemon[name] = i
    nums[i] = name

for _ in range(m):
    query = input()
    if query.isdigit():
        print(nums[int(query)])
    else:
        print(pokemon[query])
