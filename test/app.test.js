const { Panier, Article } = require('./panier');
const assert = require('chai').assert;

describe('Panier', function() {
  let panier;
  let Pantalon, Chaussure;

  beforeEach(function() {
    panier = new Panier();
    Pantalon = new Article('Pantalon', 40);
    Chaussure = new Article('Chaussure', 100);
  });

  it('devrait ajouter un article au panier', function() {
    panier.ajouterArticle(Pantalon);
    assert.equal(panier.articles.length, 1);
  });

  it('devrait retirer un article du panier', function() {
    panier.ajouterArticle(Pantalon);
    panier.retirerArticle(Pantalon);
    assert.equal(panier.articles.length, 0);
  });

  it('devrait calculer le montant total correctement', function() {
    panier.ajouterArticle(Pantalon);
    panier.ajouterArticle(Chaussure);
    assert.equal(panier.calculerMontantTotal(), 5);
  });

  it('devrait vider le panier correctement', function() {
    panier.ajouterArticle(Pantalon);
    panier.ajouterArticle(Chaussure);
    panier.viderPanier();
    assert.equal(panier.articles.length, 0);
  });
});
