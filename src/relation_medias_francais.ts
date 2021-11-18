export type relationMedias = {
    id : number;
    origine : string;
    valeur : 'contrôle' | 'participe' | '<50' | '>50' | number;
    cible : string;
    source : string;
    datePublication : string;
    dateConsultation : string;
}

export default class RelationMediasFrancais {
    id : number;
    origine : string;
    valeur : 'contrôle' | 'participe' | '<50' | '>50' | number;
    cible : string;
    source : string;
    datePublication : string;
    dateConsultation : string;

    constructor(id : number, 
                origine : string, 
                valeur : 'contrôle' | 'participe' | '<50' | '>50' | number,
                cible : string,
                source : string,
                datePublication : string,
                dateConsultation : string) 
    {
        this.id = id;
        this.origine = origine;
        this.valeur = valeur;
        this.cible = cible;
        this.source = source;
        this.datePublication = datePublication;
        this.dateConsultation = dateConsultation;
    }
}