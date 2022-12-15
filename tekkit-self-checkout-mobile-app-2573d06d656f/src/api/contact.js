import axios from 'axios';
import {SEND_GRID_URL, TOKEN} from '@env';

const sendRequest = (subj, values) =>
  axios.post(
    SEND_GRID_URL,
    {
      personalizations: [
        {
          to: [
            {
              email: 'service+checkto@oncode.ca',
            },
          ],
        },
      ],
      from: {
        email: 'service+checkfrom@oncode.ca',
      },
      subject: subj,
      content: [
        {
          type: 'text/plain',
          value: values.message,
        },
      ],
    },
    {headers: {Authorization: `Bearer ${TOKEN}`}},
  );

export default sendRequest;
