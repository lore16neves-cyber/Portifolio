function updateProfileInfo(profileData) {
   try {
      const photo = document.getElementById('profile-photo');
      const name = document.getElementById('profile-name');
      const job = document.getElementById('profile-job');
      const location = document.getElementById('profile-location');
      const phone = document.getElementById('profile-phone');
       const email = document.getElementById('profile-email');
      if (!photo || !name || !job || !location || !phone || !email) {
         console.error('Elemento não encontrado');
         return;
      }
      photo.src = profileData.photo ?? 'Foto não encontrada';
      name.textContent = profileData.name ?? 'Nome não encontrado';
      job.textContent = profileData.job ?? 'Emprego não encontrado';
      location.textContent = profileData.location?? 'Endereço não encontrado';
      phone.textContent = profileData.phone ?? 'Telefone não encontrado';
      email.textContent = profileData.email?? 'Email não encontrado';
   } catch (error) {
      console.error('Erro ao atualizar informações do perfil:', error);
   }
}
function renderSkills(profileData){
   const hardList = document.getElementById('hard-skills');
   const softList = document.getElementById('soft-skills');
   if(!hardList || !softList){
      console.error("Container de skills nãp encontrados");
      return;
   }
   //Limpa antes (evita duplicar)
   hardList.innerHTML = " ";
   softList.innerHTML = " ";
   //Hard Skills Array de Objetos
   (profileData.skills?.hardSkills ??[]).forEach(skill => {
      const li = document.createElement("li");
      li.textContent =skill.name?? "Skill";
      hardList.appendChild(li);
   });
   //Soft Skills Array de Objetos
   (profileData.skills?.softSkills ??[]).forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      softList.appendChild(li);
   });
}

function languagesTalk(profileData){
   const languagesList = document.getElementById("languages");

   if(!languagesList){
      console.error("Container de languagens não encontrado.");
      return;
   }

   //Limpar antes (Evitar duplicatas)s
   languagesList.innerHTML = "";

   //Languagens Objeto array

   (profileData.languages??[]).forEach(talk => {
      const li = document.createElement("li");
      li.textContent = talk;
      languagesList.appendChild(li);
});      
}


function education(profileData){
   const  educ = document.getElementById("education");

   if(!educ){
      console.error("Container de educação não encontrado!");
      return;
   }
   //Limpar antes 
   educ.innerHTML = "";

   (profileData.education??[]).forEach(educacao => {

      const li = document.createElement("li");
      li.textContent = (`Instituição: ${educacao.institution} - Curso: ${educacao.curso}   - Período: ${educacao.period} - Descrição: ${educacao.description} `);
      educ.appendChild(li);
      const br = document.createElement("br");
      educ.appendChild(br);
   
      
   });

}

function updatePortfolio(profileData){
   const portfolioList = document.getElementById("portfolio");
   if(!portfolioList){
      console.error("Container de portifolio não encontrado");
      return;
   }

   (profileData.portfolio??[]).forEach(portfolio => {
      const li = document.createElement("li");
     
      li.innerHTML =
            `Descrição: ${portfolio.name} - 
            <a href="${portfolio.url}" target="_blank">Acessar</a>`;
   
      portfolioList.appendChild(li);
      const br = document.createElement("br");
      portfolioList.appendChild(br);

   })

}

function experiences(profileData) {
   const ex = document.getElementById("experience");
   if (!ex) {
      console.error("Container de Experiências não encontrado!");
      return;
   }

   (profileData.professionalExperience ?? []).forEach(exps => {

      const li = document.createElement("li");
      li.innerHTML = `Cargo/Empresa: ${exps.name} - Periodo: ${exps.period} - Descrição: ${exps.description
         }`;
         console.log(`Cargo/Empresa: ${exps.name} - Periodo: ${exps.period} - Descrição: ${exps.description
         }`);

      ex.appendChild(li);
      const br = document.createElement("br");
      ex.appendChild(br);


   })

}

(async () => {
   const profileData = await fetchProfileData();
   console.log(profileData);
   //Chamada da promise
   updateProfileInfo(profileData);
   renderSkills(profileData);
   languagesTalk(profileData);
   education(profileData);
   updatePortfolio(profileData);
   experiences(profileData);
})();
