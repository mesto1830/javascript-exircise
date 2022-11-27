@extends('backend.layout.master')

@section('title', 'Sayfa Ekle')

@section('page-css')
<link rel="stylesheet" href="{{asset('/assets/css/custom.css')}}">
@endsection

@section('breadcrumb')
<!--begin::Subheader-->
<div class="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
	<div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
		<!--begin::Info-->
		<div class="d-flex align-items-center flex-wrap mr-1">
			<!--begin::Page Heading-->
			<div class="d-flex align-items-baseline flex-wrap mr-5">
				<!--begin::Page Title-->
				<h5 class="text-dark font-weight-bold my-1 mr-5">Sayfa Ekle</h5>
				<!--end::Page Title-->
				<!--begin::Breadcrumb-->
				<ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
					<li class="breadcrumb-item">
						<a href="{{route('admin.get.index')}}" class="text-muted">Anasayfa</a>
					</li>
					<li class="breadcrumb-item">
						<a href="{{route('magazine.index')}}" class="text-muted">Dergiler</a>
					</li>
					<li class="breadcrumb-item">
						<a href="{{route('magazine-page.index', ['magazine_id' => $magazine->id])}}" class="text-muted"> {{$magazine->name}} | Detay</a>
					</li>
					<li class="breadcrumb-item">
						<a href="" class="text-muted">Sayfa Ekle</a>
					</li>
				</ul>
				<!--end::Breadcrumb-->
			</div>
			<!--end::Page Heading-->
		</div>
		<!--end::Info-->
	</div>
</div>
<!--end::Subheader-->
@endsection

@section('content')
<div class="modal" id="loadingModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdrop" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="row">
        <div class="col-md-12">
          <div class="h3 text-primary text-center p-10">İşleminiz devam ediyor...</div>
        </div>
      </div>
      <img src="{{asset('assets/icons/loading.gif')}}">
    </div>
  </div>
</div>
<div class="editor">
	<!-- navbar -->
	<nav id ="navbar" class="navbar">
		<!-- font -->
		<section class="nav-container">
			<div class="nav-header">Text</div>
			<div class="nav-content">
				<input type="number" name="font-size" id="font-size" class="font-input input" title="Yazı Boyutu" onchange="checkTopElement()">
				<input type="color" name="font-color" id="font-color" class="color-input  input" title="Yazı Rengi">
				<label id="font-italic" class="font-position input" title="Yazı Stili İtalik"><img src="{{ asset ('/assets/icons/font-italic.png')}}" alt="" ></label>
				<label id="font-nor" class="font-position input" title="Yazı Stili Normal"><img src="{{ asset ('/assets/icons/font-normal.png')}}" alt="" ></label>
				<label id="font-bold" class="font-position input" title="Yazı Stili Kalın"><img src="{{ asset ('/assets/icons/font-bold.png')}}" alt="" ></label>
				<select name="" id="font-type">
					<option selected disabled>Yazı Tipi</option>
					<option value="Arial">Arial</option>
					<option value="Courier New">Courier New</option>
					<option value="Times New Roman">Times New Roman</option>
					<option value="sans-serif">sans-serif</option>
					<option value="Verdana">Verdana</option>
					<option value="Cambria">Cambria</option>
					<option value="cursive">Cursive</option>
					<option value="Impact">Impact</option>
					<option value="monospace">Monospace</option>
					<option value="serif">Serif</option>
				</select>
			</div>
		</section>
		<!-- text horizontal poition -->
		<section class="nav-container">
			<div class="nav-header">Text Pozisyon</div>
			<div class="nav-content">
				<label id="font-left" class="font-position input" title="Yazı Sola Dayalı "><img src="{{ asset ('/assets/icons/font-left.png')}}" alt=""></label>
				<label id="font-center" class="font-position input" title="Yazı Ortalı"><img src="{{ asset ('/assets/icons/font-center.png')}}" alt="" ></label>
				<label id="font-right" class="font-position input" title="Yazı Sağa Dayalı"><img src="{{ asset ('/assets/icons/font-right.png')}}" alt="" ></label>
			</div>
		</section>
        {{-- text --}}
        <section class="nav-container">
            <div class="nav-header">Text ve Arkaplan</div>
            <div class="nav-content">
              <textarea name="" id="text" cols="3" rows="1" draggable="true" ondragstart="drag(event)" disabled></textarea>
			  <input type="number" name="opacity" min="0.1" max="1" step="0.1" id="opacity" value="0" class="opacity-input" title="Text Arkaplan Saydamlık">
			  <input type="color" name="bgc-color" id="bgc-color" class="color-input input" title="Zemin Rengi">
			  <input type="button" name="ni-bgc-color" id="no-bgc-color" class="color-input input" value="X" title="Text Arkaplan Yok">
			</div>
          </section>
    </section>
		<!-- border -->
		<section class="nav-container input">
			<div class="nav-header">Kenarlık</div>
			<div class="nav-content">
				<select name="border-style" id="border-style" class="input-select">
					<option selected>Border</option>
					<option value="solid">Solid</option>
					<option value="dotted">Dotted</option>
					<option value="dashed">Dashed</option>
					<option value="double">Double</option>
					<option value="groove">Groove</option>
					<option value="ridge">Ridge</option>
					<option value="inset">Inset</option>
					<option value="outset">Outset</option>
				</select>
				<input type="number" name="border" id="border-width" value="0" class="border input" title="Kenar Kalınlığı">
				<input type="color" name="border-color" id="border-color" class="color-input input" title="Kenar Rengi">
				<input type="number" name="border-radius" id="border-radius" value="0" class="border-radius input" title="Kenar Ovallığı">
			</div>
		</section>
		<!-- padding -->
		<section class="nav-container">
			<div class="nav-header">İç Boşluk</div>
			<div class="nav-content">
				<input type="number" name="padding" id="padding-left" value="0" class="padding-input input" title="Sol Boşluk">
				<input type="number" name="padding" id="padding-top" value="0" class="padding-input input" title="Üst Boşluk">
				<input type="number" name="padding" id="padding-right" value="0" class="padding-input input" title="Sağ Boşluk">
				<input type="number" name="padding" id="padding-bottom" value="0" class="padding-input input" title="Alt Boşluk">
				<input type="number" name="padding-all" id="padding-all"  value="0" class="padding-input input" title="Hepsi">
			</div>
		</section>
		<section class="nav-container">
			<div class="nav-header">Dış Boşluk</div>
			<div class="nav-content">
				<input type="number" class="margin-input input" id="margin-top" value="0" title="Üst Boşluk">
				<input type="number" class="margin-input input" id="margin-left" value="0" title="Sol Boşluk">
				<input type="number" class="margin-input input" id="margin-right" value="0" title="Sag Boşluk">
			</div>
		</section>
		<!-- images -->
		<section class="nav-container ">
			<div class="nav-header">Arkaplan Resmi</div>
			<div class="nav-content">
				<select name="background-size" id="background-size" class="input-select" title="Arka Plan Boyutu">
					<option selected>Boyut</option>
					<option value="auto">Otomatik</option>
					<option value="cover">Kaplama</option>
					<option value="contain">İçerik</option>
				</select>
				<select name="background-position" id="background-position" class="input-select" title="Arka Plan Pozisyonu">
					<option selected>Pozisyon</option>
					<option value="center">Orta</option>
					<option value="left">Sol</option>
					<option value="right">Sağ</option>
					<option value="top">Üst</option>
					<option value="top left">Üst Sol</option>
					<option value="top right">Üst Sağ</option>
					<option value="bottom">Alt</option>
					<option value="bottom left">Alt Sol</option>
					<option value="bottom right">Alt Sağ</option>
				</select>
				<select name="background-repeat" id="background-repeat" class="input-select" title="Arka Plan Tekrarı">
					<option value="repeat">Tekrar</option>
					<option value="repeat-x">Tekrar-Yatay</option>
					<option value="repeat-y">Tekrar-Dikey</option>
					<option value="no-repeat">Tekrar Yok</option>
				</select>
				<div class="nav-content nav-content-last">
					<input type="color" name="" id="tual-background">
					<label for="load-file" id="bgi-img" class="img-buttons input" title="Taul Araka Plan Resmi">
						Arkaplan Resmi Ekle
					</label>
					<input type="file" accept="image/*" name="img-file" id="load-file" style="display: none;" title="Resim Yükle">
					<input type="button" class="img-buttons" id="no-background" value="Arkaplan Resmi Yok">
					<input type="number" min="0.1" max="1" step="0.1" id="tual-opacity" value="0" class="opacity-input" title="Arkaplan Saydamlık">
				</div>
			</div>
		</section>
		
		<section  class="nav-container">
			<div class="nav-header">Dışardan</div>
			<div class="nav-content">
				<label id="file_icon" for="file_get_image" class="img-buttons">
					Resim Ekle
				</label>
				<input type="file" id="file_get_image" hidden>
			</div>
		</section>
		<section  class="nav-container">
			<div class="nav-header">Pozisyon</div>
			<div class="nav-content">
				<input type="button" class="input" id="static" class="static" value="Statik">
				<input type="button" class="input" id="dynamic" class="static" value="Dinamik">
				<label id="item-left" class="font-position input" title="Yazı Sola Dayalı "><img src="{{ asset ('/assets/icons/font-left.png')}}" alt=""></label>
				<label id="item-center" class="font-position input" title="Yazı Ortalı"><img src="{{ asset ('/assets/icons/font-center.png')}}" alt="" ></label>
				<label id="item-right" class="font-position input" title="Yazı Sağa Dayalı"><img src="{{ asset ('/assets/icons/font-right.png')}}" alt="" ></label>
			</div>
		</section>
		<section  class="nav-container">
			<div class="nav-header">En-Boy</div>
			<div class="nav-content">
				<input type="number" class="width-input input" id="width-input" value="0" title="Genişlik">
				<input type="number" class="height-input input" id="height-input" value="0" title="Yükseklik">
			</div>
		</section>
		<section  class="nav-container">
			<div class="nav-header">Sil-Kaydet</div>
			<div class="nav-content">
				<img src="/assets/icons/delete.png" alt="" id="trash" class="save-delete-btn">
				<img src="/assets/icons/Save-icon.png" alt="" id="screenshot-button" class="input save-delete-btn">
			</div>
		</section>
		<section  class="nav-container">
			<div class="nav-header">Dergi Adı</div>
			<div class="nav-content">
				<label id="magazine-name">{{$magazine->name}}</label>
				<input type="hidden" name="" id="magazine-slug" value="{{$magazine->slug}}">
				<input type="hidden" name="" id="magazine-id" value="{{$magazine->id}}">
			</div>
		</section>
		<section  class="nav-container">
			<div class="nav-header">Son Sayfa</div>
			<div class="nav-content">
				<label id="last-page" class="page-number" style="color:#fff;font-size:15px;"></label>
			</div>
		</section>
		<section  class="nav-container">
			<div class="nav-header">Sayfa</div>
			<div class="nav-content">
				<input type="number" min="0" id="add-page-count" class="page-number" placeholder="Ara Sayfa"/>
			</div>
		</section>
  </nav>
  <!-- container -->
	<div id="container" class="editor-container" style="position: relative">
		<!-- left -->
		<section  class="left">
			<div class="blog-container">
				@foreach($posts as $post)
				<details>
					<summary id="{{$post->id}}a1"  class="blog-title"  draggable="true" ondragstart="drag(event)">
						{{$post->title}}
						<i class="fas fa-arrow-down" style="color:#444; margin-right:5px;"></i>
					</summary>
					<div>
						<div id="{{$post->id}}c1"  class="blog-content"  draggable="true" ondragstart="drag(event)">{!!$post->content!!}</div>
						<div id="blog-images">
							@foreach($post->images as $image)
							<img class="img" src="/upload/post/{{$image->image}}" id="{{$image->id}}" alt="" draggable="true" ondragstart="drag(event)"/>
							@endforeach
						</div>
					</div>
				</details>
				@endforeach
			</div>
		</section>
		<!-- right -->
		<section id="right" class="right" >
			<div id="tual" class="tual" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
		</section>
	</div>
</div>
@if(1==0)
<pspdfkit></pspdfkit>
@endif

@endsection

@section('scripts')
<script src="{{asset('/assets/js/html2.js')}}"></script>
<script src="{{asset('/assets/js/custom.js')}}"></script>
@endsection
