const getRepos = require('./ex4.js');

describe('Testes da função getRepos', () => {
  test('Verifica se os projetos to do list e meme generator está no projeto', async () => {
    expect.assertions(2);
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  });
});