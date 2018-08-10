<template>
    <div>
          <v-data-table
            :headers="headers"
            :items="customerList"
            hide-actions>
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.key }}</td>
                <td class="text-xs-right">{{ props.item.value }}</td>
                <td class="text-xs-right">{{ moment(props.item.timestamp).format('YYYY-MM-DD')}}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import moment from 'moment'
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
         headers: [
          { text: 'Name', value: 'name'},
          { text: 'Key', value: 'key' },
          { text: 'Value', value: 'value' },
          { text: 'Timestamp', value: 'timestamp' },
        ],
        customerList: null
    };
  },
  created (){
    this.getCustomer();   
  },
  methods: {
    moment,
     async getCustomer() {
      try {
        const response = await AuthenticationService.product({});
        this.customerList = response.data;
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
