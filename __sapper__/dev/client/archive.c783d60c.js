import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_each_argument, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, c as claim_space, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, p as set_data_dev, q as query_selector_all, n as noop, r as destroy_each } from './client.e1ad5abf.js';

/* src/routes/archive.svelte generated by Svelte v3.23.2 */

const file = "src/routes/archive.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i].caption;
	child_ctx[4] = list[i].taken_at;
	child_ctx[5] = list[i].path;
	return child_ctx;
}

// (56:2) {#each photos as { caption, taken_at, path: src }}
function create_each_block(ctx) {
	let div;
	let figure;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let figcaption;
	let a;
	let t1_value = (/*caption*/ ctx[3] || "...") + "";
	let t1;
	let a_href_value;
	let t2;
	let div_id_value;

	const block = {
		c: function create() {
			div = element("div");
			figure = element("figure");
			img = element("img");
			t0 = space();
			figcaption = element("figcaption");
			a = element("a");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, id: true });
			var div_nodes = children(div);
			figure = claim_element(div_nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
			var figcaption_nodes = children(figcaption);
			a = claim_element(figcaption_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, t1_value);
			a_nodes.forEach(detach_dev);
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*src*/ ctx[5])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*caption*/ ctx[3]);
			attr_dev(img, "class", "svelte-1kqtubo");
			add_location(img, file, 58, 8, 1021);
			attr_dev(a, "href", a_href_value = "archive/#" + /*getId*/ ctx[1](/*src*/ ctx[5]));
			attr_dev(a, "class", "svelte-1kqtubo");
			add_location(a, file, 60, 10, 1080);
			add_location(figcaption, file, 59, 8, 1057);
			attr_dev(figure, "class", "svelte-1kqtubo");
			add_location(figure, file, 57, 6, 1004);
			attr_dev(div, "class", "card svelte-1kqtubo");
			attr_dev(div, "id", div_id_value = /*getId*/ ctx[1](/*src*/ ctx[5]));
			add_location(div, file, 56, 4, 963);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, figure);
			append_dev(figure, img);
			append_dev(figure, t0);
			append_dev(figure, figcaption);
			append_dev(figcaption, a);
			append_dev(a, t1);
			append_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*photos*/ 1 && img.src !== (img_src_value = /*src*/ ctx[5])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*photos*/ 1 && img_alt_value !== (img_alt_value = /*caption*/ ctx[3])) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*photos*/ 1 && t1_value !== (t1_value = (/*caption*/ ctx[3] || "...") + "")) set_data_dev(t1, t1_value);

			if (dirty & /*photos*/ 1 && a_href_value !== (a_href_value = "archive/#" + /*getId*/ ctx[1](/*src*/ ctx[5]))) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*photos*/ 1 && div_id_value !== (div_id_value = /*getId*/ ctx[1](/*src*/ ctx[5]))) {
				attr_dev(div, "id", div_id_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(56:2) {#each photos as { caption, taken_at, path: src }}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let div;
	let each_value = /*photos*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-8rhbmb\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "archive";
			attr_dev(div, "class", "gallery svelte-1kqtubo");
			add_location(div, file, 54, 0, 884);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*getId, photos*/ 3) {
				each_value = /*photos*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page, session) {
	const res = await this.fetch("media.json");
	const media = await res.json();
	return { media };
}

function instance($$self, $$props, $$invalidate) {
	let { media } = $$props;

	const getId = path => {
		const segments = path.split("/");
		return segments[segments.length - 1].split(".")[0];
	};

	const writable_props = ["media"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Archive> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Archive", $$slots, []);

	$$self.$set = $$props => {
		if ("media" in $$props) $$invalidate(2, media = $$props.media);
	};

	$$self.$capture_state = () => ({ preload, media, getId, photos });

	$$self.$inject_state = $$props => {
		if ("media" in $$props) $$invalidate(2, media = $$props.media);
		if ("photos" in $$props) $$invalidate(0, photos = $$props.photos);
	};

	let photos;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*media*/ 4) {
			 $$invalidate(0, photos = media.photos);
		}
	};

	return [photos, getId, media];
}

class Archive extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { media: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Archive",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*media*/ ctx[2] === undefined && !("media" in props)) {
			console.warn("<Archive> was created without expected prop 'media'");
		}
	}

	get media() {
		throw new Error("<Archive>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set media(value) {
		throw new Error("<Archive>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Archive;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl2ZS5jNzgzZDYwYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9hcmNoaXZlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSwgc2Vzc2lvbikge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goXCJtZWRpYS5qc29uXCIpO1xuICAgIGNvbnN0IG1lZGlhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4geyBtZWRpYSB9O1xuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBtZWRpYTtcbiAgJDogcGhvdG9zID0gbWVkaWEucGhvdG9zO1xuXG4gIGNvbnN0IGdldElkID0gcGF0aCA9PiB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgICByZXR1cm4gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaXQoXCIuXCIpWzBdO1xuICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmdhbGxlcnkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0bywgMWZyKTsgKi9cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB9XG5cbiAgLmdhbGxlcnkgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZ2FsbGVyeSBmaWd1cmUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46IDAgMDtcbiAgfVxuXG4gIC5nYWxsZXJ5IC5jYXJkIHtcbiAgICBtYXJnaW46IDJlbTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuZ2FsbGVyeSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPmFyY2hpdmU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cbiAgeyNlYWNoIHBob3RvcyBhcyB7IGNhcHRpb24sIHRha2VuX2F0LCBwYXRoOiBzcmMgfX1cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPXtnZXRJZChzcmMpfT5cbiAgICAgIDxmaWd1cmU+XG4gICAgICAgIDxpbWcge3NyY30gYWx0PXtjYXB0aW9ufSAvPlxuICAgICAgICA8ZmlnY2FwdGlvbj5cbiAgICAgICAgICA8YSBocmVmPVwiYXJjaGl2ZS8je2dldElkKHNyYyl9XCI+e2NhcHRpb24gfHwgJy4uLid9PC9hPlxuICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICA8L2Rpdj5cbiAgey9lYWNofVxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTREMkMsR0FBTyxPQUFJLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvREFGbkMsR0FBTzs7OzhEQUVGLEdBQUssWUFBQyxHQUFHOzs7Ozs7O2dEQUpaLEdBQUssWUFBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEVBRVgsR0FBTzs7OztxRUFFWSxHQUFPLE9BQUksS0FBSzs7d0ZBQTlCLEdBQUssWUFBQyxHQUFHOzs7OzBFQUpaLEdBQUssWUFBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFEMUIsR0FBTTs7OztnQ0FBWCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFBQyxHQUFNOzs7OytCQUFYLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF0RGdCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTztPQUNuQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO09BQ25DLEtBQUssU0FBUyxHQUFHLENBQUMsSUFBSTtVQUNuQixLQUFLOzs7O09BS0wsS0FBSzs7T0FHVixLQUFLLEdBQUcsSUFBSTtRQUNWLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7U0FDeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFKaEQsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
