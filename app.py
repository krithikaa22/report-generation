from flask import Flask
app = Flask(__name__)
from flask_cors import CORS

config = {
  'ORIGINS': [
    'http://localhost:4200',  
    'http://127.0.0.1:5000',  
  ]
}

CORS(app, resources={ r'/*': {'origins': config['ORIGINS']}}, supports_credentials=True)

@app.route('/report', methods=['GET'])
def get_reports():
    return [
        {
          "name":"report 1",
          "created_timestamp":"12-12-12 10:15:44",
          "created_user":"ajith",
          "description":"some description"
        },
        {
            "name":"report 2",
            "created_timestamp":"12-12-12 10:15:44",
            "created_user":"ajith",
            "description":"some description"
        },
        {
        "name":"report 3",
        "created_timestamp":"12-12-12 10:15:44",
        "created_user":"ajith",
        "description":"some description"
        },
    ]


@app.route('/chart', methods=['GET'])
def get_charts():
    return [
        {
          "name":"report 1",
          "created_timestamp":"12-12-12 10:15:44",
          "created_user":"ajith",
          "description":"some description"
        },
        {
            "name":"report 2",
            "created_timestamp":"12-12-12 10:15:44",
            "created_user":"ajith",
            "description":"some description"
        },
        {
        "name":"report 3",
        "created_timestamp":"12-12-12 10:15:44",
        "created_user":"ajith",
        "description":"some description"
        },
    ]

@app.route('/components', methods=['GET'])
def get_reports_data():
    return [
    {
      'component_type': 'report',
      'component_type_id': 0,
      'component_elements': ['DPR Report',
      'ERP Report',
      'Snag Chart',]
    },
    {
      'component_type': 'filters',
      'component_type_id': 1,
      'component_elements': [
        'Start Date',
        'End Date',
        'Assignee'
      ]
    },
    {
      'component_type': 'text',
      'component_type_id': 2,
      'component_elements': [
       'text'
      ]
    },
    {
      'component_type': 'image',
      'component_type_id': 3,
      'component_elements': [
        'image'
      ]
    }
  ]

@app.route('/tabledata', methods=['GET'])
def getTableData():
    return [
   { "DPR Report" : {
                  "chart_type":"table",
                  "params":
                          [
                                  {
                                          "param":"headers_name",
                                          "data_type":"list of strings",
                                          "description":"ordered list col name",
                                          "example":["col1","col2","col3"]
                                  },
                                  {
                                          "param":"row_values",
                                          "data_type":"list of objects",
                                          "description":"this will be a list of objects. Each object will be indexed by using col list as key (i.e) data['col1'] ",
                                          "example":
                                          [
                                                  {
                                                          "col1":"frank",
                                                          "col2":"24",
                                                          "col3":"male"
                                                  },
                                          ]
                                  }
                          ]
          
     }},
 {    "ERP Report" : {
      "chart_type":"table",
      "params":
              [
                      {
                              "param":"headers_name",
                              "data_type":"list of strings",
                              "description":"ordered list col name",
                              "example":["col1","col2","col3"]
                      },
                      {
                              "param":"row_values",
                              "data_type":"list of objects",
                              "description":"this will be a list of objects. Each object will be indexed by using col list as key (i.e) data['col1'] ",
                              "example":
                              [
                                      {
                                              "col1":"frank",
                                              "col2":"24",
                                              "col3":"male"
                                      },
                              ]
                      }
              ]

}},
{"Snag Chart" : {
    "chart_type":"table",
    "params":
            [
                    {
                            "param":"headers_name",
                            "data_type":"list of strings",
                            "description":"ordered list col name",
                            "example":["col1","col2","col3"]
                    },
                    {
                            "param":"row_values",
                            "data_type":"list of objects",
                            "description":"this will be a list of objects. Each object will be indexed by using col list as key (i.e) data['col1'] ",
                            "example":
                            [
                                    {
                                            "col1":"frank",
                                            "col2":"24",
                                            "col3":"male"
                                    },
                            ]
                    }
            ]

}}

]

@app.route('/submitreport', methods=['POST'])
def submitReport(data):
    print(data)
    return True

@app.route('/tablecontent', methods=["GET"])
def getTableContetn():
        return  [
    {
         "data_table":"dpr_report",
         "data_table_id":1213,
         "cols":["col1","col2","col3","col4"],
         "filters":[
                 {
                         "filter_id":123,
                         "filter_col":"col1",
                         "data_type":"numeric",
                         "data_table_id":1213
                 },
                 {
                         "filter_id":124,
                         "filter_col":"col2",
                         "data_type":"timmestamp",
                         "data_table_id":1213
                 }
         ]
    },
    {
      "data_table":"erp_report",
      "data_table_id":1213,
      "cols":["col1","col2","col3","col4"],
      "filters":[
              {
                      "filter_id":123,
                      "filter_col":"col1",
                      "data_type":"numeric",
                      "data_table_id":1213
              },
              {
                      "filter_id":124,
                      "filter_col":"col2",
                      "data_type":"timmestamp",
                      "data_table_id":1213
              }
      ]
 }
 ]

@app.route('/componentList', methods=['GET'])
def getComponentList():
        return [
    'Table',
    'bar',
    'Pie'
  ]

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)