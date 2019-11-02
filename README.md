# SoGe Kata
[![CircleCI](https://circleci.com/gh/maissani/sogekata.svg?style=svg)](https://circleci.com/gh/maissani/sogekata) [![Greenkeeper badge](https://badges.greenkeeper.io/maissani/sogekata.svg)](https://greenkeeper.io/)

Javascript Kata destiné a émuler le retrait d'argent d un compte existant
Pour réaliser ce kata les outils suivant ont ete utilisés:

- cucumber : Pour parser la feature withdraw contenant les mots clefs Given, When, Then.
- eslint: Pour s'assurer que l'ecriture du code respecte des conventions précises
- chai: Pour les assertions lors d'un test

## Le sujet du kata
``` gherkin
Feature: Withdraw from account
  As a client of the bank
  I want to withdraw money from my account
  In order to have cash

  Scenario: An existing client withdraws from his account
      Given an existing client named "pierre-jean" with 100.0 EUR in his account
      When he withdraws 10.0 EUR from his account
      Then the new balance is 90.0 EUR
```

## Principe respectés
Voici les principes qui ont été respectés: 
- Nommage des classes
- Imutabilité
- BDD

## Installation
``` bash
  $ git clone https://github.com/maissani/sogekata.git
  $ cd sogekata
  $ npm install
```

## Usage
``` bash
  $ npm test
```

The result should be like this 
``` bash
  > sogekata@1.0.0 test C:\Users\windowsusername\Documents\Devel\Sogekata // ie: I was on windows as soon as i made this kata
  > cucumber-js --format summary

  1 scenario (1 passed)
  3 steps (3 passed)
  0m00.001s
```