<script>
	import logo from '$lib/images/logo.svg';
	let navbarOpen = false;

	function toggleNav() {
		navbarOpen = !navbarOpen;
	}
	
	//TODO: Investigate why the hamburger menu doesn't automatically handle this.
	function hideNavIfOpen() {
		navbarOpen = false;
	}
</script>

<header class="flex w-full items-center bg-white">
	<div class="container mx-auto">
		<div class="relative -mx-4 flex items-center justify-between">
			<div class="max-w-full px-4">
				<a href="/" class="block w-full py-5">
					<img src={logo} alt="dafuq" class="w-auto h-50" height="50" width="50" />
				</a>
			</div>
			<div class="flex w-full items-center justify-between px-4">
				<div>
					<button
						title="Toggle Navbar"
						on:click={toggleNav}
						id="navbarToggler"
						class="{navbarOpen
							? 'navbarTogglerActive'
							: ''} ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
					>
						<span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]" />
						<span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]" />
						<span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]" />
					</button>
					<nav
						id="navbarCollapse"
						class="{!navbarOpen
							? 'hidden'
							: ''} absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
					>
						<ul class="block lg:flex">
							<li>
								<a
									on:click={hideNavIfOpen}
									href="/"
									class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
								>
									Home
								</a>
							</li>
							<li>
								<a
									on:click={hideNavIfOpen}
									href="/about"
									class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
								>
									About
								</a>
							</li>
							<li>
								<a
									on:click={hideNavIfOpen}
									href="/essays"
									class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
								>
									Essays
								</a>
							</li>
							<li>
								<a
									on:click={hideNavIfOpen}
									href="/requests"
									class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
								>
									Requests
								</a>
							</li>
							<li>
								<a
									on:click={hideNavIfOpen}
									href="/contact"
									class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
								>
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<!-- <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
					<a href="https://github.com/lukecookssw" class="block py-5">
						<img height="50" width="50" src={github} alt="GitHub" class="github" />
					</a>
				</div> -->
			</div>
		</div>
	</div>
</header>

<!-- ====== Navbar Section End -->

<style>
	.github {
		height: 1.5rem;
	}
	.h-50 {
		height: 5rem;
	}
</style>
