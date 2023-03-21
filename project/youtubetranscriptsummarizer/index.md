# Built by
- **Suyash Satish Chintawar**
- **Feyaz Baker**
- **Venkat Rohit Merugu**
- **Naveen Kumar**
- **Gaurav Kumar**
- **Sahana**

# YouTube Transcript Summarizer


## Introduction
Throughout the day, an enormous number of video recordings are generated and shared on the Internet. It has become quite difficult to devote time to watching such videos, which may last longer than expected, and our efforts may be in vain if we are unable to extract useful information from them.

Summarizing transcripts of such videos allows us to rapidly look for relevant patterns in the video and saves us time and effort from having to go through the entire content. This project will allow us to gain hands-on experience with cutting-edge NLP techniques for abstractive text summarization.

## Dependencies and Requirements
- `flask==2.0.2`
- `torch==1.10.2`
- `urllib3==1.26.8`
- `transformers==4.16.2`
- `huggingface-hub==0.4.0`
- `youtube-transcript-api==0.4.3`
- `bert-extractive-summarizer==0.10.1`

## Running the website
1. Clone repository

`git clone https://github.com/IET-NITK/IETC-YT-Transcript-Summarizer`

2. Install requirements

`pip install -r requirements.txt`

3. Run website

`python3 app.py`

## Methodology
Three major steps are involved:

- Fetching Subtitles : ‘youtube_transcript_api’ has been used to extract summary for a youtube video by passing the video ID as the input to the api.
- Summarizing transcripts : BERT extractive summarisation has been used to summarize the obtained video transcript.
- Display summary on website : The summary is then displayed on the website hosted on flask server.

## Challenges
- Finding good abstractive text summarization techniques.
- Time required in summarization.




