class Panier {
    constructor() {
      this.articles = [];
    }
  
    // Ajouter un article au panier
    ajouterArticle(article) {
      this.articles.push(article);
    }
  
    // Retirer un article du panier
    retirerArticle(article) {
      const index = this.articles.indexOf(article);
      if (index > -1) {
        this.articles.splice(index, 1);
      }
    }
  
    // Calculer le montant total du panier
    calculerMontantTotal() {
      let total = 0;
      for (let article of this.articles) {
        total += article.prix;
      }
      return total;
    }
  
    // Vider le panier
    viderPanier() {
      this.articles = [];
    }
  }
  
  class Article {
    constructor(nom, prix) {
      this.nom = nom;
      this.prix = prix;
    }
  }
  
  module.exports = { Panier, Article };
  