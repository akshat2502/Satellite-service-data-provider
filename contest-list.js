let url = "https://isro.vercel.app/api/customer_satellites";

let p = fetch(url);
p.then((v) => {
    return v.json();
}).then((v) => {
    const data = v.customer_satellites;
    console.log(data);
    let ihtml = "";
    for (item in data) {
        console.log(data[item]);
        let imageUrl = "https://www.isro.gov.in/media_isro/image/media/Missions/PSLV/more/PSLV44/gallery/08.jpg.webp";

        // Check if launcher is PSLV-C69 and update the image URL
        if (data[item].launcher === 'PSLV-C9' || data[item].launcher === 'PSLV-C21') {
            imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a4/GSLV_Mk_III_D2_with_GSAT-29_on_Second_Launch_Pad_of_Satish_Dhawan_Space_Centre%2C_Sriharikota_%28SDSC_SHAR%29.jpg";
        }
        else if (data[item].launcher === 'PSLV-C9' || data[item].launcher === 'PSLV-C14') {
            imageUrl="https://www.isro.gov.in/media_isro/image/media/Missions/PSLV/more/PSLV44/gallery/05.jpg.webp";
        }
        else if (data[item].launcher === 'PSLV-C3' || data[item].launcher === 'PSLV-C28' || data[item].launcher === 'PSLV-C7') {
            imageUrl="https://www.isro.gov.in/media_isro/image/media/Missions/PSLV/more/PSLV44/gallery/22.jpg.webp";
        }
        else if (data[item].launcher === 'PSLV-C22' || data[item].launcher === 'PSLV-C18' || data[item].launcher === 'PSLV-C29') {
            imageUrl="https://www.isro.gov.in/media_isro/image/media/Missions/PSLV/more/PSLV44/gallery/28.jpg.webp";
        }

        ihtml += `
            <div class="card" id="card-${data[item].id}" style="width: 18rem;">
                <img src="${imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Satellite: ${data[item].id}</h5>
                    <p class="card-text">Country: ${data[item].country}</p>
                    <p class="card-text">Launch date: ${data[item].launch_date}</p> 
                    <p class="card-text">Payload: ${data[item].mass}</p> 
                    <p class="card-text">Launcher vehicle: ${data[item].launcher}</p>
                    <a href="https://www.isro.gov.in/media_isro/pdf/ForeignSatellites/381_foreign_satellites.pdf" class="btn btn-primary">For More Info</a>
                </div>
            </div>
        `;
        
    }
    cardContainer.innerHTML = ihtml;
});
