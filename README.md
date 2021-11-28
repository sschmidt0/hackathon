# Hackathon

This project is created to participate in the Hackathon organized by Barcelona Digital Talent. It consists of implementing the layout from a given template, implement validation for the payment form and connect an API for the countries that have to be shown as options for the select field within the form. 

<img width="1332" alt="Captura de Pantalla 2021-11-28 a les 14 49 16" src="https://user-images.githubusercontent.com/47662713/143770636-3dcbfba8-8c7e-4a7c-8a37-c98c1447888f.png">

You can visit it at [https://sschmidt0.github.io/hackathon/](https://sschmidt0.github.io/hackathon/).

## Tecnology used ℹ️

This project is created with React, a JavaScript library to build fast and robust applications. Its basic or common elements are styled in App.css but it also uses styled-components package to style several components. For validation, the packages is-empty and Validator are used to validate if the input is empty or if it corresponds to certain patterns, like the number of a mastercard. Therefore, RegEx are used in validation. For the card details input fields the package Cleave is used which helps with the formatting of the card number input field, the expire date input field and the CVC input field. Lastly, the package react-icons is used for the icons in this project.


## Prerequisites 📋

In order to be able to install the project you need to have the following installed:

```
Node.js
npm
```

## Installation 🔧

To install the project you need to follow the following steps:

1. On GitHub.com, navigate to the main page of the repository.
2. Above the list of files, click ⬇️ Code.

<img width="471" alt="Captura de Pantalla 2021-11-28 a les 14 53 44" src="https://user-images.githubusercontent.com/47662713/143770767-ea37d6e1-6a21-49f7-9095-9add15f6f431.png">

3. Copy the HTTPS URL.
4. Open your terminal.
5. Type `git clone`, and then paste the URL you copied earlier.

```
$ git clone https://github.com/sschmidt0/hackathon.git
```

6. Press Enter to create your local clone.
7. `cd` into the created folder which contains the project.

```
$ cd hackathon
```

8. Install the dependencies with `npm intall` to be able to start the project.

```
$ npm install
```

9. Start the project with `npm start`.

```
$ npm start
```




