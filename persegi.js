const formPersegi = document.getElementById("formPersegi");
const sisi = document.getElementById("sisi");
const container = document.getElementById("container");

const hasilPersegi = JSON.parse(localStorage.getItem("persegi")) || [];

const addPersegi = (sisi, hasil) => {
    hasilPersegi.push({
        sisi,
        hasil
    });

    localStorage.setItem("persegi", JSON.stringify(hasilPersegi));

    return {sisi, hasil};
}

const buatPersegi = ({sisi, hasil}) => {

    const divPersegi = document.createElement("div");
    const sisi1 = document.createElement("p");
    const hasil1 = document.createElement("h2");
    const hr = document.createElement("hr");

    sisi1.innerHTML = "sisi : " + sisi;
    hasil1.innerHTML = "Luas Persegi : " + hasil;

    divPersegi.append(sisi1, hasil1, hr);
    container.appendChild(divPersegi);
};

hasilPersegi.forEach(buatPersegi);

formPersegi.onsubmit = e => {
    e.preventDefault();

    const varSisi = sisi.value;
    const Luas = varSisi*varSisi;

    const PersegiBaru =addPersegi(
        varSisi,
        Luas
    );

    buatPersegi(PersegiBaru);

    sisi.value = "";
};