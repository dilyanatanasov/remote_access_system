<template>
  <card>
    <div class="row">
        <div class="col-md-12">
            <h1>{{task.name}}</h1>
            <div class="row">
                <div class="col-md-1">
                    <p>Number: </p>
                    <p>Assignee: </p>
                    <p>Due Date: </p>
                    <p>Stage: </p>
                    <p>Description: </p>
                </div>
                <div class="col-md-11">
                    <p>{{task.number}}</p>
                    <p>{{task.assignee}}</p>
                    <p>{{task.date}}</p>
                    <p><span class="text-success">{{task.stage}}</span></p>
                    <p>{{task.description}}</p>
                </div>
            </div>
            <button class="btn btn-success disabled">Submit Resolution</button>
            <button class="btn btn-info">Download Resources</button>
        </div>
    </div>
  </card>
</template>
<script>
export default {
    data() {
        return {
            task :
                    {
                        number: 2032,
                        name: "Static Routing",
                        assignee: "Dilyan Atanasov",
                        date: "2020-03-20",
                        stage: "Completed",
                        description: "Routers forward packets using either route information from route table entries that you manually configure or the route information that is calculated using dynamic routing algorithms. Static routes, which define explicit paths between two routers, cannot be automatically updated; you must manually reconfigure static routes when network changes occur. Static routes use less bandwidth than dynamic routes. No CPU cycles are used to calculate and analyze routing updates.You can supplement dynamic routes with static routes where appropriate. You can redistribute static routes into dynamic routing algorithms but you cannot redistribute routing information calculated by dynamic routing algorithms into the static routing table.You should use static routes in environments where network traffic is predictable and where the network design is simple. You should not use static routes in large, constantly changing networks because static routes cannot react to network changes. Most networks use dynamic routes to communicate between routers but may have one or two static routes configured for special cases. Static routes are also useful for specifying a gateway of last resort (a default router to which all unroutable packets are sent)."
                    }
        };
    },
}
</script>
<style scoped>
button {
    margin-right: 10px;
}

p{
    padding: 5px 0px;
    text-align: justify;
}
</style>
