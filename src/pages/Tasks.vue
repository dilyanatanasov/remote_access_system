<template>
  <div class="row">
    <div class="col-md-12">
      <h2>Tasks</h2>
      <p>Here you will find all of your assigned tasks that need to be completed in the described period</p>
      <p>If you don't complete the tasks in the suggested period you will automatically fail the theme.</p>
      <card :title="table1.title" class="mt-4">
        <div class="table">
          <base-table :data="table1.data" :columns="table1.columns" thead-classes="text-primary"></base-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import NotificationTemplate from './Notifications/NotificationTemplate';
import { BaseTable } from "@/components";
import { BaseAlert } from '@/components';
const tableColumns = ["Number", "Name", "Assignee", "Date", "Stage"];
const tasks = [
  {
    number: 2032,
    name: "Static Routing",
    assignee: "Dilyan Atanasov",
    date: "2020-03-20",
    stage: "Completed"
  },
  {
    number: 2033,
    name: "Dynamic Routing",
    assignee: "Dilyan Atanasov",
    date: "2020-03-23",
    stage: "Not Started"
  },
  {
    number: 2034,
    name: "VLAN Implementation",
    assignee: "Dilyan Atanasov",
    date: "2020-04-01",
    stage: "Failed"
  },
  {
    number: 2035,
    name: "Switching",
    assignee: "Dilyan Atanasov",
    date: "2020-04-20",
    stage: "Not Started"
  }
];
export default {
  components: {
    BaseTable,
    BaseAlert
  },
  data() {
    return {
      table1: {
        title: "Your Tasks",
        columns: [...tableColumns],
        data: [...tasks]
      }
    };
  }
};
</script>
<style>
</style>
