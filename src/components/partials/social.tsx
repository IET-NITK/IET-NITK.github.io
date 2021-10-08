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
import { IShareButtons } from "../../types/components";

export const ShareButtons: React.FC<IShareButtons> = ({ url, title, author, category, image }) => {
  const shareProps = {
    url,
    title: `${title  } by ${  author[0].name}`,
  };
  const iconProps = {
    size: 32,
  };
  return (
    <div className="pt-4">
      <TwitterShareButton hashtags={Array.isArray(category) ? category : [category] } {...shareProps}>

        <TwitterIcon {...iconProps} />
      </TwitterShareButton>
      <LinkedinShareButton source={url} summary={title} {...shareProps}>
        <LinkedinIcon {...iconProps} />
      </LinkedinShareButton>
      <FacebookShareButton
        hashtag={`#${  Array.isArray(category) ? category[0] : category}`}
        quote={`${title  } by Nirmal Khedkar`}
        {...shareProps}
      >
        <FacebookIcon {...iconProps} />
      </FacebookShareButton>
      <PinterestShareButton media={image} {...shareProps}>
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
