import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export const ShareButtons = ({ url, title, author, category }) => {
  const shareProps = {
    url,
    title: `${title  } by ${  author[0]}`,
  };
  const iconProps = {
    size: 32,
  };
  return (
    <div className="pt-4">
      <TwitterShareButton hashtags={category} {...shareProps}>

        <TwitterIcon {...iconProps} />
      </TwitterShareButton>
      <LinkedinShareButton source={url} summary={title} {...shareProps}>
        <LinkedinIcon {...iconProps} />
      </LinkedinShareButton>
      <FacebookShareButton
        hashtag={`#${  category}`}
        quote={`${title  } by Nirmal Khedkar`}
        {...shareProps}
      >
        <FacebookIcon {...iconProps} />
      </FacebookShareButton>
      <PinterestShareButton {...shareProps}>
        <PinterestIcon {...iconProps} />
      </PinterestShareButton>
      <WhatsappShareButton {...shareProps}>
        <WhatsappIcon {...iconProps} />
      </WhatsappShareButton>
      <TelegramShareButton title={`${title  } by Nirmal Khedkar`} {...shareProps}>
        <TelegramIcon {...iconProps} />
      </TelegramShareButton>
      <RedditShareButton {...shareProps}>
        <RedditIcon {...iconProps} />
      </RedditShareButton>
      <EmailShareButton
        body="I found this interesting blog article that you might like:"
        subject="Check out this blog on nirmalhk7.tech"
        {...shareProps}
      >
        <EmailIcon {...iconProps} />
      </EmailShareButton>
    </div>
  );
};
