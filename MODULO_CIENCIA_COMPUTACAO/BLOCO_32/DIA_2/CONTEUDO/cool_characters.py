# escrita
file_characters = open('favorites-characters.txt', mode='w')
file_characters.write('Tio Patinhas\n')
file_characters.write('Hulk\n')

print('Batman', file=file_characters)

more_characters = ['Pikachu\n', 'Ant-man\n']

file_characters.writelines(more_characters)

file_characters.close()


file_characters = open('favorites-characters.txt', mode="r")
content = file_characters.read()
print(content)
file_characters.close()
