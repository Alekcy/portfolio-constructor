import * as React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Lock, LockOpen } from '@material-ui/icons';
import { styled } from '@material-ui/styles';

const ElementBox = styled(Box)({ display: 'flex' });
const LockIcon = styled(Lock)({ cursor: 'pointer' });
const LockOpenIcon = styled(LockOpen)({ cursor: 'pointer' });

export const CenterElement = ({ share, locked, onLockClick }) => {
	return (
		<ElementBox>
			<Typography>
				{Math.round(share)} %
			</Typography>
			{
				locked
					? <LockIcon fontSize="small" onClick={onLockClick} />
					: <LockOpenIcon fontSize="small" onClick={onLockClick} />
			}
		</ElementBox>
	);
};