async function fetchProfileData() {

    const url = 'https://raw.githubusercontent.com/jadergomesc/js-developer-portfolio/refs/heads/master/assets/data/profile.json';

    const fetching = await fetch(url);
    return await fetching.json();
}   
