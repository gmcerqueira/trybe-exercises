const changeX = (string, word) => {
  const arrString = string.split(" ");
  for (let i = 0; i < arrString.length; i += 1) {
    if (arrString[i] === "x") arrString[i] = word;
  }
  return arrString.join(" ");
};

const skills = ["Git", "HTML5", "CSS", "JavaScript", "FlexBox"];

const showSkills = (skills, name) => {
  console.log(changeX("Minhas cinco principais habilidades são:", name));
  for (let i = 0; i < skills.length; i++) {
    console.log(`- ${skills[i]};`);
  }
};

showSkills(skills, "Bebeto");
