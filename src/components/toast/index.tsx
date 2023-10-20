import React from 'react'
import { Snackbar, Alert } from '@mui/material'

const Toast = ({
	message,
	severity,
	isOpen,
	onClose,
	autoHideDuration = 2000,
}: ToastProps & { onClose: () => void }) => (
	<Snackbar
		open={isOpen}
		autoHideDuration={autoHideDuration}
		anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		onClose={onClose}
		style={{
			position: 'fixed',  
			top: 0, 
			left: '50%', 
			transform: 'translate(-50%, -50%)', 
			maxWidth: '13rem',
			marginLeft: '1rem',
			marginTop: '4rem',
		}}
	>
		<Alert severity={severity} sx={{ width: '100%' }}>
			{message}
		</Alert>
	</Snackbar>
)

export default Toast
