let btnNavigasi = document.getElementById("btn-navigasi")
let navigasi = document.getElementById("navigasi")

let statusBtnNavigasi = false
btnNavigasi.addEventListener("click", () => {
    statusBtnNavigasi = !statusBtnNavigasi
    if(statusBtnNavigasi) navigasi.style.display = "flex"
    else navigasi.style.display = "none"
})

const portofolios = [
    {
        name: "Lorem Ipsum",
        date: "12 January 2023",
        img: "assets/website-1.jpg",
        type: "Website Design"
    },
    {
        name: "Lorem Ipsum",
        date: "15 September 2023",
        img: "assets/UIUX-1.jpg",
        type: "UI/UX"
    },
    {
        name: "Lorem Ipsum",
        date: "15 September 2024",
        img: "assets/website-2.jpg",
        type: "Website Design"
    },
]

window.addEventListener("load", () => {
    let portofolioContainer = document.getElementById("portofolio-container")
    portofolios.forEach(e => {
        portofolioContainer.innerHTML +=`
        <div class="flex flex-col pt-[80px] max-h-[305px] w-[300px]">
            <img src="${e.img}" alt="" class="w-full h-full">
            <div class="flex flex-col py-[20px] pl-[20px] bg-slate-800">
                <p class="text-neutral-50 font-bold text-[17px]">${e.name}</p>
                <p class="text-slate-500 font-bold text-[12px]">${e.date}</p>
            </div>
        </div>
         `
    }) 

    let btnFilterPortofolio = document.querySelectorAll("#filter-portofolio button")
    btnFilterPortofolio.forEach(btn => {
        btn.addEventListener("click", () => {
            btnFilterPortofolio.forEach(btn => btn.style.backgroundColor = "#0f172a")
            btn.style.backgroundColor = "#1e293b"
            portofolioContainer.innerHTML = ""
            if(btn.innerText != "All") {
                let portofolioFilter = portofolios.filter(e => e.type == btn.innerText)
                portofolioFilter.forEach(e => {
                    portofolioContainer.innerHTML +=`
                    <div class="flex flex-col pt-[80px] max-h-[305px] w-[300px]">
                        <img src="${e.img}" alt="" class="w-full h-full">
                        <div class="flex flex-col py-[20px] pl-[20px] bg-slate-800">
                            <p class="text-neutral-50 font-bold text-[17px]">${e.name}</p>
                            <p class="text-slate-500 font-bold text-[12px]">${e.date}</p>
                        </div>
                    </div>
                    ` 
                })
            } else {
                portofolios.forEach(e => {
                    portofolioContainer.innerHTML +=`
                    <div class="flex flex-col pt-[80px] max-h-[305px] w-[300px]">
                        <img src="${e.img}" alt="" class="w-full h-full">
                        <div class="flex flex-col py-[20px] pl-[20px] bg-slate-800">
                            <p class="text-neutral-50 font-bold text-[17px]">${e.name}</p>
                            <p class="text-slate-500 font-bold text-[12px]">${e.date}</p>
                        </div>
                    </div>
                     `
                }) 
            }
        })
    })
})