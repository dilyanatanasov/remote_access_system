<template>
    <div class="row">
        <div class="col-md-7">
            <h2>Console View</h2>
            <h3>Web SSH client for learning purposes</h3>
            <p>Setup mode provides an interactive menu to help you to create an initial configuration file for a new networking device, or a device that you have erased the startup-config file from NVRAM. The nteractive menu guides you through initial configuration and is useful when you are unfamiliar with Cisco products or the command line interface (CLI) and when configuration changes do not require the level of detail the CLI provides. Setup mode can also be used to modify an existing configuration. This section describes how to use the System Configuration Dialog to prepare a Cisco networking device for full configuration and how you can make configuration changes after an initial configuration is complete. To improve readability, filenames are enclosed in quotation marks. Also, the terms device and networking device mean a router, switch, or other device running Cisco IOS software. The terms initial configuration and startup configuration are used interchangeably.</p>
        </div>
        <div class="col-md-5">
            <div class="form-group">
                <label>Scheme</label>
                <select class="form-control" id="scheme">
                    <option value="1">Static Routing</option>
                    <option value="2">Dynamic Routing</option>
                    <option value="3">VLAN Configuration</option>
                    <option value="4">Tunneling</option>
                </select>
                <div id="terminal"></div>
            </div>
            <img src="img/example_scheme.jpg"/>
            <button class="btn btn-block btn-primary">Connect</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Dilyan",
        }
    }
}
</script>
<style scoped>
.custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  background-color: DodgerBlue;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>