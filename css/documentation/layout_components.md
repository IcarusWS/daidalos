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
