<template>
  <div class="row">
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
    <div class="col-md-8">
      <user-info :user="user"></user-info>
    </div>
    <div class="col-md-12">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard';
  import UserInfo from './Profile/UserInfo';
  export default {
    components: {
      EditProfileForm,
      UserCard,
      UserInfo
    },
    data() {
      return {
        model: {
          company: 'NVNA',
          email: 'dilyanatanasov177@gmail.com',
          username: 'dilyan',
          firstName: 'Dilyan',
          lastName: 'Atanasov',
          address: 'Atanas Radov',
          city: 'Novi pazar',
          country: 'Bulgaria',
          about: 'NVNA Nikola Vaptsarov Academy, Cybersecurity'
        },
        user: {
          fullName: 'Dilyan Atanasov',
          title: 'Student',
          description: `NVNA Nikola Vaptsarov Academy, Cybersecurity`,
          university: 'NVNA',
          level: 'master',
          year: 'second',
          course: 'Cybersecuirty',
          email: 'dilyanatanasov177@gmail.com',
          username: 'dilyan',
          address: 'Atanas Radov',
          city: 'Novi pazar',
          country: 'Bulgaria'
        }
      }
    }
  }
</script>
<style>
</style>
