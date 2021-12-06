<template>
  <div class="mt-3">
    <main class="container">
      <form>
        <h1 class="h3 mb-3 fw-normal text-center">Please Register</h1>

        <div class="mb-3">
          <label for="exampleInputName" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleInputName" />
        </div>

        <div class="mb-3">
          <label for="exampleInputAddess" class="form-label">Address</label>
          <input type="text" class="form-control" id="exampleInputAddess" aria-describedby="emailHelp" />
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="jk" id="rbLaki" />
          <label class="form-check-label" for="rbLaki"> Laki-Laki </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="jk" id="rbPr" />
          <label class="form-check-label" for="rbPr"> Perempuan </label>
        </div>
        <div class="mt-3 mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>

        <router-link :to="{ name: 'login' }" class="w-100 btn btn-lg btn-secondary mt-1" type="button">Login</router-link>
      </form>
    </main>
  </div>
</template>