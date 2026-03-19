async function fetchProfileData() {

    const url = 'https://raw.githubusercontent.com/lore16neves-cyber/Portifolio/5c4a56af0c7c4dc4ee3faafb30eb0de295ad6349/assets/data/profile.json?token=GHSAT0AAAAAADYI6M4KX2DXPUE5DO3VXH2Q2N4Q24A';

    const fetching = await fetch(url);
    return await fetching.json();
}   
