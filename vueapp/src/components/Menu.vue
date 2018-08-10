<template>
   <div class = "pl-4 pr-4 pt-2 pb-2">
        <v-flex xs6 offset-xs3>
            <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Menu</v-toolbar-title>
            </v-toolbar> 
                    <tr v-for="(row, index) in rows" :key='index'>
                        <td>
                            <v-text-field placeholder="label" v-model="row.label" solo></v-text-field>
                        </td>
                        <td>
                            <v-text-field placeholder="value" v-model="row.value" solo></v-text-field>
                        </td>
                        <td>
                            <v-btn small color="primary" @click="removeRow(index)"> Delete </v-btn>
                        </td>
                    </tr>
                <!-- </div> --> 
        <v-btn small color="primary" @click="addRow"> Add Row </v-btn>
        </v-flex>

        <v-btn small color="primary" @click="save">Save</v-btn>
    </div>
  
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      rows:[
          { label: null, value: null }
      ],
      error: null
    };
  },
  methods: {
    addRow: function(){
      this.rows.push({});
    },
    async save(){
        console.log("the row:", JSON.stringify(this.rows));
          try {
          const response = await AuthenticationService.option(this.rows)
         console.log(response.data);
      } catch (error){
          this.error = error
      }
    },
    removeRow: function(index){
     this.rows.splice(index,1);
    }
  },
  watch: {
    rows: function(){
        localStorage.setItem('rows', JSON.stringify(this.rows));
    }
  },
  mounted() {
      if (localStorage.getItem('rows')) this.rows = JSON.parse(localStorage.getItem('rows'));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
