<template>
  <card type="user">
    <h4 class="card-text">
    General Information
    </h4>
    <div class="row p-3">
        <div class="col-md-2 card-text">
            <p>University:</p>
            <p>Course:</p>
            <p>Level:</p>
            <p>Year:</p>
            <p>Email:</p>
            <p>Address:</p>
            <p>City:</p>
            <p>Country:</p>
        </div>
        <div class="col-md-9 card-text">
            <p>{{user.university}}</p>
            <p>{{user.course}}</p>
            <p>{{user.level}}</p>
            <p>{{user.year}}</p>
            <p>{{user.email}}</p>
            <p>{{user.address}}</p>
            <p>{{user.city}}</p>
            <p>{{user.country}}</p>
        </div>
    </div>
  </card>
</template>
<script>
  export default {
    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
</style>
