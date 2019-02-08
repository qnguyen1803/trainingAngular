import { TrainingAngularConfig } from '../app/components/dashboard/interfaces/training-angular-config';

const trainingAngularConfig: TrainingAngularConfig = {
  items: [
    {cols: 1, rows: 2, widget: {icon: 'glyphicon glyphicon-headphones', class: 'bg-success'}},
    {cols: 1, rows: 1, widget: {icon: 'glyphicon glyphicon-volume-off', class: 'bg-secondary'}},
    {cols: 1, rows: 1, widget: {icon: 'glyphicon glyphicon-remove', class: 'bg-dark'}},
    {cols: 2, rows: 1, widget: {icon: 'glyphicon glyphicon-cloud', class: 'bg-warning'}},
    {cols: 1, rows: 1, widget: {icon: 'glyphicon glyphicon-envelope', class: 'bg-danger'}},
    {cols: 1, rows: 1, widget: {icon: 'glyphicon glyphicon-film', class: null}},
    {cols: 3, rows: 1, widget: {icon: 'glyphicon glyphicon-repeat', class: null}},
    {cols: 1, rows: 1, widget: {icon: 'glyphicon glyphicon-chevron-right', class: null}},
    {cols: 1, rows: 1, widget: {icon: 'glyphicon glyphicon-circle-arrow-right', class: null}},
    {cols: 1, rows: 1, widget: {icon: 'glyphicon glyphicon-sort-by-order-alt', class: null}},
    {cols: 1, rows: 1, widget: {icon: 'glyphicon glyphicon-sd-video', class: 'bg-warning'}},
    {cols: 1, rows: 2, widget: {icon: 'glyphicon glyphicon-cloud-download', class: null}}
  ]
};

export const environment = {
  production: false,
  trainingAngularConfig: trainingAngularConfig
};

