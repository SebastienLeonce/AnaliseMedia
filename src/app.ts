import * as fs from 'fs-extra';
import RelationMediasFrancais, { relationMedias } from './relation_medias_francais'
import MediasFrancais, { mediasFrancais } from './medias_francais'
var TSV = require('tsv')



const medias_francais = TSV.parse(fs.readFileSync('./data/medias_francais.tsv').toString())
const relations_medias_francais = TSV.parse(fs.readFileSync('./data/relations_medias_francais.tsv').toString())

const relation_medias_francais_struct : relationMedias[] = [];
const medias_francais_struct : mediasFrancais[] = [];

relations_medias_francais.forEach((x : relationMedias) => {
    if (typeof x.id == 'number') {
        relation_medias_francais_struct.push(new RelationMediasFrancais(x.id, x.origine, x.valeur, x.cible, x.source, x.datePublication, x.dateConsultation));
    }
});

medias_francais.forEach((x : mediasFrancais) => {
    if (typeof x.id == 'number') {
        medias_francais_struct.push(new MediasFrancais(x.id, x.nom, x.typeLibelle, x.typeCode, x.rangChallenges, x.milliardaireForbes, x.mediaType, x.mediaPeriodicite, x.mediaEchelle, x.commentaire, x.ACPMdiffusion));
    }
});


const res : {name : string, val: number}[] = []
const media = "Télérama"
getProprio(media, res, 100)

console.log(`${media} :`)
console.log(res)




function getProprio(name: string, acc: {name : string, val: number}[], val : number) {

    const res = relation_medias_francais_struct.filter(x => x.cible == name);

    if (res.length == 0) {
        acc.push({name : name, val: val});
    } else {
        res.map((x : relationMedias) => {
            if (typeof x.valeur == 'number') {
                getProprio(x.origine, acc, val*x.valeur/100);
            } else {
                throw new Error(`${x.valeur} is not a valid value`)
            }
        })
    }
}