export type mediasFrancais = {
    id : number
    nom : string
    typeLibelle : number
    typeCode : number
    rangChallenges : number
    milliardaireForbes : number
    mediaType : string
    mediaPeriodicite : string
    mediaEchelle : string
    commentaire : string
    ACPMdiffusion : string
}


export default class MediasFrancais {
    id : number
    nom : string
    typeLibelle : number
    typeCode : number
    rangChallenges : number
    milliardaireForbes : number
    mediaType : string
    mediaPeriodicite : string
    mediaEchelle : string
    commentaire : string
    ACPMdiffusion : string

    constructor(id : number,
        nom : string,
        typeLibelle : number,
        typeCode : number,
        rangChallenges : number,
        milliardaireForbes : number,
        mediaType : string,
        mediaPeriodicite : string,
        mediaEchelle : string,
        commentaire : string,
        ACPMdiffusion : string)
    {
        this.id = id;
        this.nom = nom;
        this.typeLibelle = typeLibelle;
        this.typeCode = typeCode;
        this.rangChallenges = rangChallenges;
        this.milliardaireForbes = milliardaireForbes;
        this.mediaType = mediaType;
        this.mediaPeriodicite = mediaPeriodicite;
        this.mediaEchelle = mediaEchelle;
        this.commentaire = commentaire;
        this.ACPMdiffusion = ACPMdiffusion;
    }

}