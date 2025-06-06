import { useSelector } from 'react-redux';

import ReviewCardStars from '@/components/ReviewCardStars';
import { Card, CardContent, Separator } from '@/components/ui';
import UserAvatar from '@/components/UserAvatar';

const ReviewCard = ({ review }) => {
  const { users } = useSelector((state) => state.users);

  const reviewUser = users[review.userId];

  return (
    <Card className='pt-4'>
      <CardContent>
        <div className='mb-4 flex flex-row items-center justify-between'>
          <h3 className='mb-0'>
            {review.title ?? `${review.comment.substr(0, 20)}...`}
          </h3>
          <ReviewCardStars review={review} />
        </div>
        <Separator className='mb-4' />
        {reviewUser && (
          <>
            <UserAvatar user={reviewUser} />
            <Separator className='my-4' />
          </>
        )}
        <div className='whitespace-pre-line'>{review.comment}</div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
