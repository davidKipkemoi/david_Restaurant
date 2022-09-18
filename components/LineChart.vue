<script>
  import {Line} from 'vue-chartjs/legacy'
  export default {
    extends: Line,
    props:{
      label:{
        type:String
      },
      chartData:{
        type:Array
      },
      chartOptions:{
        type:Object
      }
    },
    mounted(){
      const dates = this.chartData.map(d=>d.name)
      const totals = this.chartData.map(d=>d.total)

      this.renderChart({
        labels: dates,
        datasets:[
          {
            label:this.label,
            data:totals,
          }
        ]

      },
      this.options
      )
    }
  }

</script>
