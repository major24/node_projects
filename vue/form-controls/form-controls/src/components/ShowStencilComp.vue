<template>
  <div>
    <div>Stencil Template</div>
    <cx-workflow-activity id='wft' header='My workflow'>
    </cx-workflow-activity>
    <mncomponent></mncomponent>
    <Workflow header="aa"></Workflow>
    <workflow-activity></workflow-activity>
    <cx-workflow-template></cx-workflow-template>
  </div>
</template>

<script>
import Workflow from 'workflow-activity'

export default {
  name: 'ShowStencilComp',
  component: {
    Workflow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
