import { Button, Container, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import NavigationBar from '../components/Navbar';

const schema = z.object({
	name: z
		.string({
			required_error: 'Name is required',
		})
		.min(1, { message: 'Name is required' }),
	description: z
		.string({
			required_error: 'Description is required',
		})
		.min(1, { message: 'Description is required' }),
	image: z
		.string({
			required_error: 'Image is required',
		})
		.min(1, { message: 'Image is required' })
		.url({ message: 'Enter a valid image url' }),
	author: z
		.string({
			required_error: 'Author is required',
		})
		.min(1, { message: 'Author is required' }),
	genre_id: z
		.string({
			required_error: 'Genre required',
		})
		.min(1, { message: 'Genre is required' }),
	date_published: z
		.string({
			required_error: 'Date published is required',
		})
		.min(1, { message: 'Date published is required' }),
});

const AddCatalogue = () => {
	const { control, handleSubmit, formState } = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			description: '',
			image: '',
			author: '',
			genre_id: '',
			date_published: '',
		},
	});

	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<Container>
			<NavigationBar />

			<Form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Name"
								{...field}
							/>

							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>

				<Controller
					name="description"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="Description"
								{...field}
							/>

							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>

				<Controller
					name="image"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Image</Form.Label>
							<Form.Control
								type="url"
								placeholder="Image"
								{...field}
							/>

							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>

				<Controller
					name="author"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Author</Form.Label>
							<Form.Control
								type="text"
								placeholder="Author"
								{...field}
							/>

							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>

				<Controller
					name="genre_id"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Genre</Form.Label>

							<Form.Select
								aria-label="Default select example"
								{...field}
							>
								<option>Select genre</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>

							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>

				<Controller
					name="date_published"
					control={control}
					render={({ field, fieldState }) => (
						<Form.Group className="mb-3">
							<Form.Label>Date published</Form.Label>
							<Form.Control
								type="datetime-local"
								placeholder="Date published"
								{...field}
							/>

							{fieldState.invalid && (
								<Form.Text className="text-danger">
									{fieldState.error.message}
								</Form.Text>
							)}
						</Form.Group>
					)}
				/>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default AddCatalogue;
