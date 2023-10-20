import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const AlertDialog = ({
	isOpen,
	handleConfirmDelete,
	handleClose,
	currentItemName,
}: AlertDialogProps) => (
	<div>
		<Dialog
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title" >
				Tem certeza que deseja excluir este produto?
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{currentItemName}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Não</Button>
				<Button onClick={handleConfirmDelete} color="error">
					Sim
				</Button>
			</DialogActions>
		</Dialog>
	</div>
)

export default AlertDialog
