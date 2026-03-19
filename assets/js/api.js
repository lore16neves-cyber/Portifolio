async function fetchProfileData() {

    const url = 'https://raw.githubusercontent.com/lore16neves-cyber/Portifolio/refs/heads/main/assets/data/profile.json?token=GHSAT0AAAAAADYI6M4L5R6S6Q57TT23F3FQ2N4RH6Q';

    const fetching = await fetch(url);
    return await fetching.json();
}   
