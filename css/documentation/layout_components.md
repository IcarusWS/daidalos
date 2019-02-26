# Layout Components

Layout components are CSS classes from Daidalos, starting with _.cl-_

Examples of Layout Components are footers, navbars and banners

## Navbars

### Pills navbar
_Dark:_
![Navbars example](https://jessetraas.ostrealyceum.net/px/git-icarus/img/c-navbar-pills-dark.png)

_Light:_
![Navbars example](https://jessetraas.ostrealyceum.net/px/git-icarus/img/c-navbar-pills-light.png)

Recommended HTML structure:
```sh
<nav class="cl-navbar-pills cs-navbar-light">
  <div class="c-nav-logo">
    <img src="img/yourlogo.png" />
  </div>
  <div class="c-nav-buttons">
    <a href="#" id="nav-active">Item 1</a>
    <a href="#">Item 2</a>
    <a href="#">Item 3</a>
  </div>
</nav>
```
The class `.cs-navbar-light` can be swapped out for `.cs-navbar-dark` to apply the dark theme of the pills navbar.

### Metro navbar
_Dark:_
![Navbars example](https://jessetraas.ostrealyceum.net/px/git-icarus/img/c-navbar-metro.png)

Recommended HTML structure:
```sh
<nav class="cl-navbar-dark-metro">
  <div class="c-nav-buttons">
    <a href="#" id="nav-active">Item 1</a>
    <a href="#">Item 2</a>
    <a href="#">Item 3</a>
  </div>
</nav>
```

## Footers

### Simple footer
Recommended HTML structure:
```sh
<div class="cl-footer-simple cs-footer-light">
  <p>&copy; 2019, Icarus W&amp;S. All rights reserved.</p>
</div>
```
The class `.cs-footer-light` can be swapped out for `.cs-footer-dark` to apply the dark theme of the simple footer.

### Footer expansion
Recommended HTML structure:
```sh
<div class="cl-footer-expansion cs-footer-light">
  <div class="cl-columns-2">
    <div class="cl-footer-list">
      <p class="c-small-caps-bold">Title</p>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
    <div class="cl-footer-list">
      <p class="c-small-caps-bold">Links</p>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Terms and conditions</a></li>
        <li><a href="#">Privacy policy</a></li>
      </ul>
    </div>
  </div>
</div>
```
The class `.cs-footer-light` can be swapped out for `.cs-footer-dark` to apply the dark theme of the footer expansion.
Also, `.cl-columns-2` is not mandatory - It's here for illustrative purposes.
