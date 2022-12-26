<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">ShopCart</router-link>
      </h1>
      <form class="form-wrapper cf">
        <div id="container">
          <div class="cell"><input type="search" placeholder="Search" /></div>

          <div class="cell"><button class="button">Search</button></div>
        </div>
      </form>
      <ul>
        <li>
          <router-link to="/catagories">
            <v-btn elevation="2" large raised rounded> Catagories </v-btn>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
  
  <style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  color: #f391e3;
}
header a {
  text-decoration: none;

  display: inline-block;
}

a:active,
a:hover,
button:hover {
  border: 1px solid #f391e3;
  border-radius: 1rem;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
nav input {
  background: black;
}
div.cell {
  display: table-cell;
}
div.cell:last-child {
  /* Makes sure this cell is only wide enough
       for the button label. */
  width: 1px;
}

input[type='search'],
div.button {
  width: 100%;
  height: 2.1875rem;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  font-family: inherit;
  font-size: inherit;
}

input[type='search'] {
  margin: 0;
  padding: 0 0.625rem;

  background-color: #f8f8f8;

  border: 0;
  border-top-left-radius: 0.3125rem;
  border-bottom-left-radius: 0.3125rem;
}

div button {
  line-height: 2.1875rem;

  margin: 0;
  padding: 0 1.25rem;

  color: #fff;
  background-color: #ff1717;
  font-weight: bold;

  border-top-right-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;

  white-space: nowrap;
}
#container {
  display: flex;
  align-items: center;
  background: #3d008d;
}
@media only screen and (max-width: 900px) {
  .form-wrapper.cf {
    display: none;
  }
}
</style>